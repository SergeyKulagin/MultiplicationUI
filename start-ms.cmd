title MULTIPLICATION-UI-MS

start /B java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8005 -jar ..\Gateway\target\gateway-0.0.1-SNAPSHOT.jar --server.port=8000
start /B java -jar ..\DiscoveryService\target\discoveryservice-0.0.1-SNAPSHOT.jar --server.port=9999 
start /B java -jar ..\Gamification\target\gamification-0.0.1-SNAPSHOT.jar --server.port=8099
start "multiplication" /B java -jar ..\SocialMultiplication\target\social-multiplication-0.0.1-SNAPSHOT.jar --server.port=8097
REM start "multiplication2" java -jar ..\SocialMultiplication\target\social-multiplication-0.0.1-SNAPSHOT.jar --server.port=8100 --logging.file=logs/multiplication2.txt