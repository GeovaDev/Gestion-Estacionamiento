CREATE DATABASE UTNGParking;

USE UTNGParking;

CREATE TABLE TipoUsuario(
    idTipoUsuario TINYINT NOT NULL PRIMARY KEY,
    nomTipoUsuario VARCHAR(30) NOT NULL
);

CREATE TABLE TipoVehiculo(
    idTipoVehiculo TINYINT NOT NULL PRIMARY KEY,
    nomTipoVehiculo VARCHAR(30) NOT NULL
);

CREATE TABLE Estacion(
    idEstacion TINYINT NOT NULL PRIMARY KEY,
    nomEstacion VARCHAR(30) NOT NULL,
    idTipoUsuario TINYINT NOT NULL,
    FOREIGN KEY(idTipoUsuario) REFERENCES TipoUsuario(idTipoUsuario)
);

CREATE TABLE Usuario(
    idUsuario INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    cveUsuario VARCHAR(10) NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    apePat VARCHAR(30) NOT NULL,
    apeMat VARCHAR(30),
    imgUsuario VARCHAR(255) NOT NULL,
    telefono BIGINT NOT NULL,
    correo VARCHAR(50) NOT NULL,
    passwd VARCHAR(100) NOT NULL,
    idTipoUsuario TINYINT NOT NULL,
    FOREIGN KEY(idTipoUsuario) REFERENCES TipoUsuario(idTipoUsuario)
);

CREATE TABLE Vehiculo(
    numPlacas VARCHAR(10) NOT NULL PRIMARY KEY,
    marca VARCHAR(10) NOT NULL,
    modelo VARCHAR(10) NOT NULL,
    color VARCHAR(10) NOT NULL,
    qrCode VARCHAR(100) NOT NULL,
    cveUsuario VARCHAR(10) NOT NULL,
    idTipoVehiculo TINYINT NOT NULL,
    FOREIGN KEY(idTipoVehiculo) REFERENCES TipoVehiculo(idTipoVehiculo)
);

CREATE TABLE Asignacion(
    idEstacion TINYINT NOT NULL,
    cveUsuario VARCHAR(10) NOT NULL,
    numPlacas VARCHAR(10) NOT NULL,
    estaActivo BOOLEAN NOT NULL,
    PRIMARY KEY(idEstacion,cveUsuario,numPlacas),
    FOREIGN KEY(idEstacion) REFERENCES Estacion(idEstacion),
    FOREIGN KEY(cveUsuario) REFERENCES Usuario(cveUsuario),
    FOREIGN KEY(numPlacas) REFERENCES Vehiculo(numPlacas)
);

CREATE TABLE Acceso(
    idAcceso TINYINT NOT NULL PRIMARY KEY,
    cveUsuario VARCHAR(10) NOT NULL,
    idEstacion TINYINT NOT NULL,
    fechaInicio DATE NOT NULL,
    fechaFinal DATE,
    horaInicio TIME NOT NULL,
    horaFinal TIME,
    FOREIGN KEY(cveUsuario) REFERENCES Usuario(cveUsuario),
    FOREIGN KEY(idEstacion) REFERENCES Estacion(idEstacion)
);