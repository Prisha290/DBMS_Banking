-- use banking1;
-- alter table account
-- drop column DebitCard;
-- --redundant then can't enter in account or debitcard table cause of foreign key constraint.

-- drop register_login;
-- create table Register_login(
-- 					AccountNo int ,
--                     first_Name varchar(30) not null,
--                     username varchar(25) not null,
--                     password_t varchar(25) not null,
--                     primary key(AccountNo)
-- );

--  alter table debitcard
--  drop debitCardNo;

-- alter table debitcard
--  add column debitCardNo INT AUTO_INCREMENT PRIMARY KEY;

-- alter table Register_login
-- add constraint rl_fk
-- AccountNo references account(AccountNo) on delete cascade on update cascade ;


-- -- drop procedure Insert_notification;
-- -- delimiter // 
-- -- create procedure Insert_notification( IN AccountNo int ,IN mobile varchar(10),IN email varchar(50))
-- -- BEGIN 
-- -- 	INSERT INTO notification(AccountNo,mobile,email)
-- -- 			VALUES (AccountNo,mobile,email);
-- -- END //
-- -- delimiter ;

-- delimiter // 
-- create trigger before_insert_loan
-- before insert on loan
-- for each row
-- begin
-- set new.amount= new.principal * new.rate* new.time_yrs + new.principal;
-- set new.toBePaid= new.amount;
-- end;
-- //
-- delimiter ;

-- -- alter table loan
-- -- add column time_yrs float not null;

alter table notification
add constraint fk_acct
foreign key(AccountNo) references account(AccountNo);