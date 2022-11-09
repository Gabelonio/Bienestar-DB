package com.empleado.modulo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ModuloApplication {

	public static void main(String[] args) {
		java.security.Security.setProperty("jdk.tls.disabledAlgorithms", "");
		SpringApplication.run(ModuloApplication.class, args);
	}

}
