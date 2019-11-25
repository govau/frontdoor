FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

VOLUME /app
EXPOSE 5000 5001 9929 9230
ENTRYPOINT ["dotnet", "watch", "run"]
CMD ["--urls", "http://*:5000"]
