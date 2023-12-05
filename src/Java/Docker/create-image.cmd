docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sroki-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t sroki-java/app ../../..
