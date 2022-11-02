USE SurveyApp; 

create table if not exists VoteData
(
    Id         bigint auto_increment primary key,
    Position   longtext null,
    Experience longtext null,
    Url        longtext null,
    Feedback   longtext null
);

create table if not exists VoteOption
(
    Id       bigint auto_increment primary key,
    Language longtext not null,
    Count    bigint   null
);

create table if not exists VoteLog
(
    Id           bigint auto_increment primary key,
    VoteOptionId bigint      null,
    VoteDataId   bigint      null,
    Time         datetime(3) null,
    constraint fk_VoteLog_VoteData
        foreign key (VoteDataId) references VoteData (Id),
    constraint fk_VoteLog_VoteOption
        foreign key (VoteOptionId) references VoteOption (Id)
);

create table if not exists User
(
    Id        bigint unsigned auto_increment primary key,
    Username  longtext    not null,
    Password  longtext    not null,
    CreatedAt datetime(3) null,
    UpdatedAt datetime(3) null,
    DeletedAt datetime(3) null
);

create index idx_User_DeletedAt
    on User (DeletedAt);




INSERT INTO VoteOption VALUES (1, 'Go', 0),(2, 'C#', 0),(3, 'JavaScript', 0),(4, 'Phyton', 0),(5, 'Java', 0),(6, 'Rust', 0),(7, 'Kotlin', 0),(8, 'PHP', 0),(9, 'TypeScript', 0),(10, 'C / C++', 0),(11, 'None', 0);