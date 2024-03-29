#!coding=utf-8
# author： soliton.wang
# Email :  soliton.wang@gmail.com
# Install_moduels: requests pyexecjs pymysql pandas
# toutiao.sing.js : https://shimo.im/docs/hjCPJGtRdyTDkdd8

import requests
import os
import re
import json
import random
import time
from requests.packages.urllib3.exceptions import InsecureRequestWarning
import hashlib
import execjs
import pandas as pd
from pymysql import *

###禁止提醒SSL警告
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
# mysql connect
# mysqldb = connect(
#     host='IP',
#     port=3306,
#     database='database',
#     user='username',
#     password='password',
#     charset='utf8')
# cs = mysqldb.cursor()

# spider_web_name
name = '头条'  # 插入数据库时使用
class toutiao(object):
    def __init__(self, url):
        self.url = url
        self.s = requests.session()
        headers = {'Accept': '*/*',
                   'Accept-Language': 'zh-CN',
                   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
                   'Connection': 'Keep-Alive',
        }
        self.s.headers.update(headers)
        self.channel = re.search('ch/(.*?)/', url).group(1)

    def closes(self):
        self.s.close()

    def getdata(self):  # 获取数据
        req = self.s.get(url=self.url, verify=False)
        # print (self.s.headers)
        # print(req.text)
        headers = {'referer': self.url}
        max_behot_time = '0'
        signature = '.1.hXgAApDNVcKHe5jmqy.9f4U'
        eas = 'A1E56B6786B47FE'
        ecp = '5B7674A7FF2E9E1'
        self.s.headers.update(headers)
        title = []
        source = []
        source_url = []
        comments_count = []
        tag = []
        chinese_tag = []
        label = []
        abstract = []
        behot_time = []
        nowtime = []
        duration = []
        for i in range(0, 30):  ##获取页数
            Honey = json.loads(self.get_js())
            # eas = self.getHoney(int(max_behot_time))[0]
            # ecp = self.getHoney(int(max_behot_time))[1]
            eas = Honey['as']
            ecp = Honey['cp']
            signature = Honey['_signature']
            url = 'https://www.toutiao.com/api/pc/feed/?category={}&utm_source=toutiao&widen=1&max_behot_time={}&max_behot_time_tmp={}&tadrequire=true&as={}&cp={}&_signature={}'.format(
                self.channel, max_behot_time, max_behot_time, eas, ecp, signature)
            req = self.s.get(url=url, verify=False)
            time.sleep(random.random() * 2 + 2)
            # print(req.text)
            if req.text != '':
                j = json.loads(req.text)
                for k in range(0, 7):
                    now = time.time()
                    if j['data'][k]['tag'] != 'ad':
                        title.append(j['data'][k]['title'])  ##标题
                        source.append(j['data'][k]['source'])  ##作者
                        source_url.append('https://www.toutiao.com' + j['data'][k]['source_url'])  ##文章链接
                        try:
                            comments_count.append(j['data'][k]['comments_count'])  ###评论
                        except:
                            comments_count.append(0)
                        tag.append(j['data'][k]['tag'])  ###频道名
                        try:
                            chinese_tag.append(j['data'][k]['chinese_tag'])  ##频道中文名
                        except:
                            chinese_tag.append('')
                        try:
                            label.append(j['data'][k]['label'])  ## 标签
                        except:
                            label.append('')
                        try:
                            abstract.append(j['data'][k]['abstract'])  ###文章摘要
                        except:
                            abstract.append('')
                        behot = int(j['data'][k]['behot_time'])
                        behot_time.append(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(behot)))  ####发布时间
                        nowtime.append(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(now)))  ##抓取时间
                        duration.append(now - behot)  ##发布时长

                time.sleep(2)

                """
                # max_behot_time=str(j['next']['max_behot_time'])
                print('------------' + str(j['next']['max_behot_time']))
                print(title)
                print(source)
                print(source_url)
                print(comments_count)
                print(tag)
                print(chinese_tag)
                print(label)
                print(abstract)
                print(behot_time)
                print(nowtime)
                print(duration)
                """

                data = {
                    'title': title,
                    'source': source,
                    'source_url': source_url,
                    'comments_count': comments_count,
                    'tag': tag,
                    'label': label,
                    'chinese_tag': chinese_tag,
                    'abstract': abstract,
                    'behot_time': behot_time,
                    'nowtime': nowtime,
                    'duration': duration
                }
                df = pd.DataFrame(data=data)
                df.to_csv(r'toutiao.csv', encoding='GB18030', index=0)
                sql_values = df.values
                # print(sql_values)
                # for sql_value in sql_values:
                #     query = "insert ignore into toutiao(title,source,source_url,comments_count, tag, label, chinese_tag,abstract,behot_time,nowtime,duration,class) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                #     values = (sql_value[0], sql_value[1], sql_value[2], sql_value[3], sql_value[4], sql_value[5], sql_value[6],sql_value[7], sql_value[8], sql_value[9], sql_value[10], name)
                #     cs.execute(query, values)
                #     mysqldb.commit()
            else:
                print('spider_toutiao_data_null')

    def getHoney(self, t):  #####根据JS脚本破解as ,cp
        # t = int(time.time())  #获取当前时间
        # t=1534389637
        # print(t)
        e = str('%X' % t)  ##格式化时间
        # print(e)
        m1 = hashlib.md5()  ##MD5加密
        m1.update(str(t).encode(encoding='utf-8'))  ##转化格式
        i = str(m1.hexdigest()).upper()  ####转化大写
        # print(i)
        n = i[0:5]  ##获取前5位
        a = i[-5:]  ##获取后5位
        s = ''
        r = ''
        for x in range(0, 5):
            s += n[x] + e[x]
            r += e[x + 3] + a[x]
        eas = 'A1' + s + e[-3:]
        ecp = e[0:3] + r + 'E1'
        return eas, ecp

    def get_js(self):
        if os.path.exists("cryptojs.js"):
            with open('cryptojs.js', 'r', encoding='utf-8') as f:
                toutiao_js = f.read()
        else:
            resp = requests.Session().get('https://cdn.issem.cn/toutiao/cryptojs.js')  # 此处加headers会报错
            toutiao_js = resp.text

        ctx = execjs.compile(toutiao_js)
        """
        f = open(r"toutiao_sing.js", 'r', encoding='UTF-8')
        line = f.readline()
        htmlstr = ''
        while line:
            htmlstr = htmlstr + line
            line = f.readline()
        ctx = execjs.compile(htmlstr)
        """
        return ctx.call('get_as_cp_signature')


if __name__ == '__main__':
    url = 'https://www.toutiao.com/ch/news_world/'
    t = toutiao(url)
    t.getdata()
    t.closes()
    # cs.close()
    # mysqldb.close()