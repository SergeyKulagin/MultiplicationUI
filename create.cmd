SET JETTY_HOME=E:\programms\_jetty-distribution-9.4.12.v20180830\jetty-distribution-9.4.12.v20180830
java -jar %JETTY_HOME%\start.jar --create-startd
java -jar %JETTY_HOME%\start.jar --add-to-start=http,deploy