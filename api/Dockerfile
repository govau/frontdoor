FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
# COPY . ./
# RUN dotnet publish -c Release -o out

# Build runtime image
# FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
# WORKDIR /app
# COPY --from=build-env /app/out .

VOLUME /app
EXPOSE 5000 5001 9929 9230
ENTRYPOINT ["dotnet", "watch", "run"]
CMD ["--urls", "http://0.0.0.0:5000"]
