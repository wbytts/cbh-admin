import hashlib
import random
import uuid
from passlib.handlers.pbkdf2 import pbkdf2_sha256


def random_str():
    """
    唯一随机字符串
    :return: str
    """
    only = hashlib.md5(str(uuid.uuid1()).encode(encoding="UTF-8")).hexdigest()
    return str(only)


def code_number(ln: int):
    """
    随机数字
    :param ln: 长度
    :return: str
    """
    code = ""
    for i in range(ln):
        ch = chr(random.randrange(ord("0"), ord("9") + 1))
        code += ch

    return code
