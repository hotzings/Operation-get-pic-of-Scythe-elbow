echo off

FOR /F "eol=# tokens=*" %%i IN (%~dp0.env) DO SET %%i

.\CFExporter.exe -o ./temp -n ScorchletsPlayOrigins -d %minecraftInstanceDir%

tar -xf temp/ScorchletsPlayOrigins-1.0.0.zip -C ./src/pack

del temp/ScorchletsPlayOrigins-1.0.0.zip /q