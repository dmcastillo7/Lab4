-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: biblioteca
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombreusuario` varchar(100) NOT NULL,
  `cedulausuario` varchar(10) NOT NULL,
  `telefonousuario` varchar(10) NOT NULL,
  `direccionusuario` varchar(200) NOT NULL,
  `correousuario` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL DEFAULT '123456',
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Dario Castillo','1234567890','0983423227','Tumbaco','dariomcastillo@gmail.com','$2b$10$jsdHrcvuubpxl0SUqUX1AOS/22bP8eal8vhF6qFGYFo.Lun8HAOEq'),(2,'MIGUEL SALAZAR','1711711711','0987654321','TUMBACO','miguel@correo.com','$2b$10$jsdHrcvuubpxl0SUqUX1AOS/22bP8eal8vhF6qFGYFo.Lun8HAOEq'),(3,'MIGUEL SALAZAR','1711711711','0987654321','QUITO','miguel@ejemplo.com','$2b$10$jsdHrcvuubpxl0SUqUX1AOS/22bP8eal8vhF6qFGYFo.Lun8HAOEq'),(4,'MIGUEL SALAZAR','1711711711','0987654321','TUMBACO','miguel@ejemplo.com','$2b$10$jsdHrcvuubpxl0SUqUX1AOS/22bP8eal8vhF6qFGYFo.Lun8HAOEq'),(5,'MARIANA SALAZAR','1001278066','8888888888','TUMBACO','mariana@ejemplo.com','$2b$10$JVpMARDfK.5RXjU6E3ha3.fxq5K4Q65mT4PMJZpRnW2yVnlJxRWle');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-02 21:19:55
