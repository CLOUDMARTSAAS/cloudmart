## To Run server
```
ACTIVE_PROFILE=local python main.py
```

## Liquibase

- Install liquibase (OSS)
1. Download liquibase
https://www.liquibase.com/open-source
2. Install it and configure path

- To dry run liquibase script
```
liquibase update-sql --changelog-file=./db/changelog.xml --url= --default-schema-name=cloudmart_core --username= --password=
```

- To apply liquibase script
```
liquibase update --changelog-file=./db/changelog.xml --url= --default-schema-name=cloudmart_core --username= --password=
```


## Linting
Run below command, it will lint all .py files in current directory, update .flake8 to setup ignores
```
flake8
```
