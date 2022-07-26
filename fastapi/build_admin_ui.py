# encoding: utf-8
"""
@author: wbytts
@desc: 
"""
import os

os.chdir('./admin-ui')
os.system('npm install')
os.system('npm run build')
os.chdir('../')


