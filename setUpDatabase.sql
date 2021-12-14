CREATE DATABASE IF NOT EXISTS ZAYKA_RESTAURENT;
USE ZAYKA_RESTAURENT;

DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
    id int not null AUTO_INCREMENT,
    user_name varchar(255),
    phone_no varchar(255),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS MENUITEM;
CREATE TABLE MENUITEM (
    id int not null AUTO_INCREMENT,
    name VARCHAR(256),
    type ENUM ('veg', 'nonveg'), 
    main_category varchar(256),
    sub_category varchar(256),
    price int,
    course_type ENUM ('starter','main', 'deserts'),
    rating int,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS RESTAURENT;
CREATE TABLE RESTAURENT (
    id int not null AUTO_INCREMENT,
    name VARCHAR(255),
    city VARCHAR(255),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS FOODORDER;
CREATE TABLE FOODORDER (
    id int not null AUTO_INCREMENT,
    user_id int,
    total int,
    status ENUM ('ordered', 'cancelled', 'delivered'),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES USER (id)
);

DROP TABLE IF EXISTS ORDERITEM;
CREATE TABLE ORDERITEM (
    id int not null AUTO_INCREMENT,
    food_item int,
    order_id int, 
    base_price int,
    quantity int,
    total_item_price int,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES FOODORDER (id),
    FOREIGN KEY (food_item) REFERENCES MENUITEM (id)
);

DROP TABLE IF EXISTS IMAGEMAPPING;
CREATE TABLE IMAGEMAPPING (
    id int not null AUTO_INCREMENT,
    imagekey VARCHAR(255),
    imageurl VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO USER ( user_name, phone_no) VALUES ('prasad', '9876548798');
INSERT INTO USER ( user_name, phone_no ) VALUES ('ramesh', '9876548000');

INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('masala dosa','veg', 'south', 'dosa', 200, 'starter', 4);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('rava dosa','veg', 'south', 'dosa', 100, 'starter', 2);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('paneer dosa','veg', 'south', 'dosa', 200, 'starter', 4);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('chicken dosa','nonveg', 'south', 'dosa', 200, 'starter', 5);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('idli','veg', 'south', 'idli', 200, 'starter', 1);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('fried idli','veg', 'south', 'idli', 200, 'starter', 2);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('idli samber','veg', 'south', 'idli', 500, 'starter', 4);

INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('paneer masala','veg', 'north', 'curry', 200, 'main', 5);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('sahi paneer','veg', 'north', 'curry', 200, 'main', 1);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('chicken curry','nonveg', 'north', 'curry', 200, 'main', 4);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('chicken dosa','nonveg', 'north', 'curry', 200, 'main', 5);

INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('veggie supreme','veg', 'pizza', 'suprem', 200, 'starter', 2);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('veggie delite','veg', 'pizza', 'suprem', 100, 'starter', 4);

INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('Margherita','veg', 'pizza', 'classic', 100, 'starter', 5);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('fresh vaggie','veg', 'pizza', 'classic', 250, 'starter', 2);
INSERT INTO MENUITEM ( name, type, main_category, sub_category, price, course_type, rating ) VALUES ('Extravegenza','veg', 'pizza', 'premium', 410, 'starter', 1);


INSERT INTO RESTAURENT ( name, city ) VALUES ( 'khana Khazana', 'Jaipur');

INSERT INTO FOODORDER ( user_id, total, status ) VALUES (1, 800, 'ordered');
INSERT INTO FOODORDER ( user_id, total, status ) VALUES (2, 1900, 'delivered');

INSERT INTO ORDERITEM ( food_item, order_id, base_price, quantity, total_item_price ) VALUES (1,1, 100, 2, 200);
INSERT INTO ORDERITEM ( food_item, order_id, base_price, quantity, total_item_price ) VALUES (2,1, 150,4, 600);
INSERT INTO ORDERITEM ( food_item, order_id, base_price, quantity, total_item_price ) VALUES (1,2, 100, 10, 1000);
INSERT INTO ORDERITEM ( food_item, order_id, base_price, quantity, total_item_price ) VALUES (2,2,150, 6, 900);

INSERT INTO IMAGEMAPPING ( imagekey, imageurl ) VALUES ('south','south_wwebkYnGEzQ.jpg?updatedAt=1639146161359');
INSERT INTO IMAGEMAPPING ( imagekey, imageurl ) VALUES ('north','nort_ccGM1sG9y.jpg?updatedAt=1639146161272');
INSERT INTO IMAGEMAPPING ( imagekey, imageurl ) VALUES ('pizza','pizza_XGOMQ5TXs.jpg?updatedAt=1639146161282');