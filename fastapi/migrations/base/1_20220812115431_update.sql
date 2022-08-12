-- upgrade --
ALTER TABLE `game_user` ADD `user_ganme_name` VARCHAR(255)   COMMENT '姓名';
-- downgrade --
ALTER TABLE `game_user` DROP COLUMN `user_ganme_name`;
