package com.empleado.modulo.service;

import com.empleado.modulo.entity.Empleado;

import java.util.List;
import java.util.Optional;

public interface IEmpeladoDao {

	public List<Empleado> findAll();
	
	public Empleado saveEmpleado(Empleado empleado);
	
	public Optional<Empleado> findEmpleadoById(Integer id);
	
}
