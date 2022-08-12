-- upgrade --
ALTER TABLE `game_user` MODIFY COLUMN `ganme_name` VARCHAR(255)   COMMENT '游戏名呀';
-- downgrade --
ALTER TABLE `game_user` MODIFY COLUMN `ganme_name` VARCHAR(255)   COMMENT '游戏名';
