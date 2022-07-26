from tortoise import fields
from tortoise.models import Model
from .base import TimestampMixin

class GameUser(TimestampMixin):

    ganme_name = fields.CharField(null=True, description="游戏名呀", max_length=255)

    class Meta:
        table_description = "游戏用户表"
        table = "game_user"


class GameSnakeConfig(TimestampMixin):

    class Meta:
        table_description = '贪吃蛇游戏配置表'
        table = "game_snake_config"



class GameScore(TimestampMixin):

    class Meta:
        table_description = '游戏积分表'
        table = "game_score"



