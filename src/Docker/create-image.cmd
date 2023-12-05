docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sroki/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sroki/app ../..
