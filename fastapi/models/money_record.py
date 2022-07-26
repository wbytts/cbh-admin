from tortoise import fields
from tortoise.models import Model
from .base import TimestampMixin


class MoneyRecord(TimestampMixin):
    user_id = fields.IntField(description="用户ID")

    class Meta:
        table_description = "金额记录表"
        table = "money_record"


class IncomeType(TimestampMixin):
    name = fields.CharField(null=False, max_length=255, description="类型名称")

    class Meta:
        table_description = "收入类型表"
        table = "income_type"

class ExpenditureType(TimestampMixin):
    name = fields.CharField(null=False, max_length=255, description="类型名称")

    class Meta:
        table_description = "支出类型表"
        table = "expenditure_type"


class UserAssetAccount(TimestampMixin):
    user_id = fields.IntField(description="用户ID")

    class Meta:
        table_description = '资金账户'
        table = 'user_asset_account'


class UserAsset(TimestampMixin):
    user_id = fields.IntField(description="用户ID")

    class Meta:
        table_description = '用户资产表'
        table = 'user_asset'







