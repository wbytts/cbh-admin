from tortoise import fields
from tortoise.models import Model
from .base import TimestampMixin


class CollectType(TimestampMixin):
    class Meta:
        table_description = "收集类型表"
        table = "collect_type"


class CollectUrl(TimestampMixin):
    class Meta:
        table_description = "URL收集表"
        table = "collect_url"


class CollectText(TimestampMixin):
    class Meta:
        table_description = "文本收集表"
        table = "collect_text"


class CollectImage(TimestampMixin):
    class Meta:
        table_description = "图片收集表"
        table = "collect_image"

