### 百度翻译Sign加密JS( <https://cdn.issem.cn/translate/baidu/sign.js> )

	百度翻译Sign加密JS

``` python
# ==================================
# --*-- coding: utf-8 --*--
# @Time    : 2021-08-12
# @Author  : 微信公众号：K哥爬虫
# @FileName: baidufanyi.py
# @Software: PyCharm
# ==================================


import re
import execjs
import requests
from urllib import parse


session = requests.session()
index_url = 'https://fanyi.baidu.com/'
lang_url = 'https://fanyi.baidu.com/langdetect'
translate_api = 'https://fanyi.baidu.com/v2transapi'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}
# cookies = {
#     "BAIDUID": "624363427DBD2BFCDF0C3D6E129F5C65:FG=1"
# }


def get_params(query):
    # 获取 token 和 gtk
    session.get(url=index_url, headers=headers)
    # print(session.cookies.get_dict())
    response_index = session.get(url=index_url, headers=headers)
    token = re.findall(r"token: '([0-9a-z]+)'", response_index.text)[0]
    gtk = re.findall(r'gtk = "(.*?)"', response_index.text)[0]
    # 自动检测语言
    response_lang = session.post(url=lang_url, headers=headers, data={'query': query})
    lang = response_lang.json()['lan']
    return token, gtk, lang


def get_sign_and_token(query, gtk, lang):
    with open('baidufanyi_encrypt.js', 'r', encoding='utf-8') as f:
        baidu_js = f.read()
    sign = execjs.compile(baidu_js).call('e', query, gtk)
    translate_url = 'https://fanyi.baidu.com/#%s/en/%s' % (lang, parse.quote(query))
    acs_token = execjs.compile(baidu_js).call('ascToken', translate_url)
    return sign, acs_token


def get_result(query, lang, sign, token, acs_token):
    data = {
        'from': lang,
        'to': 'en',
        'query': query,
        'transtype': 'realtime',
        'simple_means_flag': '3',
        'sign': sign,
        'token': token,
    }
    headers["Acs-Token"] = acs_token
    response = session.post(url=translate_api, headers=headers, data=data)
    result = response.json()['trans_result']['data'][0]['dst']
    return result


def main():
    query = input('请输入要翻译的文字：')
    token, gtk, lang = get_params(query)
    sign, acs_token = get_sign_and_token(query, gtk, lang)
    result = get_result(query, lang, sign, token, acs_token)
    print('翻译成英文的结果为：', result)


if __name__ == '__main__':
    main()
```

``` pyrhon
# -*- coding: utf-8 -*-
# @Author: Null119 微信公众号/网站：治廷君
# @Desc: { 百度翻译 }
# @Date: { 2023-01-06 }
# @script: { cryptojs.js }

import requests
import re
import execjs

ctx = execjs.compile(open('cryptojs.js',encoding='utf-8').read())
r = requests.Session()

def getTokenGtk():
    headers={
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Host':'fanyi.baidu.com',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54'
        }
    resp=r.get('https://fanyi.baidu.com/',headers=headers).text
    resp = r.get('https://fanyi.baidu.com/', headers=headers).text
    gtk=re.search(r'window\.gtk = "(.*?)"',resp).group(1)
    token=re.search(r"token: '([a-z0-9]{32})'",resp).group(1)
    return token,gtk

def getTS():
    resp=r.get('https://dlswbr.baidu.com/heicha/mm/2060/acs-2060.js').text
    runtext=re.search(r'p\.run\(.*?\)',resp).group()
    ts=re.search(r'[\d+]{13}',runtext).group()
    return ts

def getData(words,token,gtk,ts):
    key='aiyyeswmsceomsaa'
    while True:
        acstoken=ts+str(ctx.eval('AcsToken("https://fanyi.baidu.com/#en/zh/' +words +'","'+key+'")'))
        sign=str(ctx.eval('sign("' + words + '","'+gtk+'")'))
        pdat={
            "from":"en",
            "to":"zh",
            "query":words,
            "transtype":"realtime",
            "simple_means_flag":"3",
            "sign":sign,
            "token":token,
            "domain":"common"
        }
        r.headers['Acs-Token'] = acstoken
        resp= r.post('https://fanyi.baidu.com/v2transapi?from=en&to=zh',data=pdat)
        if 'errmsg' in resp.json():
            if key=='aiyyeswmsceomsaa':key='meaaauoegemaaaqs'
            else:key == 'aiyyeswmsceomsaa'
        else:
            print('Acs-Token：', acstoken)
            print('Token：',token)
            print('sign：', sign)
            print('翻译内容：',words,', 翻译结果：',resp.json()['trans_result']['data'][0]['dst'])
            break

if __name__ == '__main__':
    token,gtk=getTokenGtk()
    ts=getTS()
    words='happy'
    getData(words,token,gtk,ts)
```

``` python
#!usr/bin/env python
# coding:utf-8
"""
 @script: sign.js
 @Author:小生
 @date  : 2021-05-15 11:57
"""
import json
import zlib

import requests
import re
import random
import execjs

query = "may"
def user_agent():
    ua = ['Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1464.0 Safari/537.36',
          'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36',
          'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36',
          'Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36',
          'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36',
          'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36',
          'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:17.0) Gecko/20100101 Firefox/17.0.6',
          'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36',
          'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36',
          'Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36']
    return random.choice(ua)

url = "https://fanyi.baidu.com/"

"""获取令牌toekn"""
session = requests.session()
headers = {
    'User-Agent': user_agent(),
    'Host': 'fanyi.baidu.com',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90",',
    'sec-ch-ua-mobile': '?0',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
}
resp = session.get(url, headers=headers).content.decode()
res = session.get(url, headers=headers).content.decode()
token = re.findall(r"token: '(.*)',", res, re.M)[0]

"""获取签名sign"""
with open('sign.js', 'r', encoding='utf-8')as fp:
    js = fp.read()
    sign = execjs.compile(js).call('SDK', query)

query_lang = 'en' if 40 < ord(query[0:1]) < 91 or 96 < ord(query[0:1]) < 123 else 'zh'
trans_lang = 'en' if query_lang == 'zh' else 'zh'
data = {
    'from': query_lang,
    'to': trans_lang,
    'query': query,
    'transtype': 'realtime',
    'sign': sign,
    'token': token,
    'domain': 'common'
}

url = "https://fanyi.baidu.com/v2transapi?from={}&to={}".format(query_lang, trans_lang)
req = session.post(url, headers=headers, data=data)
decode = req.content.decode('gbk','ignore')
loads = json.loads(decode)
res = loads['trans_result']['data'][0]['dst']
print(decode)
print(res)
```