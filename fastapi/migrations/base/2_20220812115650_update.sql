-- upgrade --
ALTER TABLE `game_user` ADD `ganme_name` VARCHAR(255)   COMMENT '游戏名';
ALTER TABLE `game_user` DROP COLUMN `user_ganme_name`;
-- downgrade --
ALTER TABLE `game_user` ADD `user_ganme_name` VARCHAR(255)   COMMENT '姓名';
ALTER TABLE `game_user` DROP COLUMN `ganme_name`;
