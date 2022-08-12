# 资料
https://github.com/tortoise/aerich

# 安装

```
pip install aerich
```

```
> aerich -h

Usage: aerich [OPTIONS] COMMAND [ARGS]...

Options:
  -V, --version      Show the version and exit.
  -c, --config TEXT  Config file.  [default: pyproject.toml]
  --app TEXT         Tortoise-ORM app name.
  -h, --help         Show this message and exit.

Commands:
  downgrade  Downgrade to specified version.
  heads      Show current available heads in migrate location.
  history    List all migrate items.
  init       Init config file and generate root migrate location.
  init-db    Generate schema and generate app migrate location.
  inspectdb  Introspects the database tables to standard output as...
  migrate    Generate migrate changes file.
  upgrade    Upgrade to specified version.
```

# 编写配置文件

注意：models里不能忘了 `aerich.models`

```py
TORTOISE_ORM = {
    "connections": {"default": "mysql://root:123456@127.0.0.1:3306/test"},
    "apps": {
        "models": {
            "models": ["tests.models", "aerich.models"],
            "default_connection": "default",
        },
    },
}
```

# 初始化配置文件和迁移文件夹

```
aerich init -t database.mysql_prod.TORTOISE_ORM
```

# 初始化数据库

```
aerich init-db
```

# 更新模型, 制作迁移文件

```
aerich migrate --name drop_column
```

# 更新

```
aerich upgrade
```

# 降级
```
aerich downgrade
```

# 显示历史

```
aerich history
```

# Show heads to be migrated

```
aerich heads
```


# 检查数据库表到 TortoiseORM 模型

目前inspectdb支持 MySQL & Postgres & SQLite

```
检查所有表并打印到控制台：aerich --app models inspectdb
检查默认应用程序中的指定表并重定向到models.py：aerich inspectdb -t user > models.py
```

# 在代码中使用Aerich
```py
from aerich import Command

command = Command(tortoise_config=config, app='models')
await command.init()
await command.migrate('test')
```



