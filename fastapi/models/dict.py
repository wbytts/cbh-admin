from tortoise import fields
from tortoise.models import Model
from .base import TimestampMixin


class DictItem(TimestampMixin):


    class Meta:
        table_description = "字典项表"
        table = "dict_item"


