package com.empleado.modulo.service.empleado;

import com.empleado.modulo.entity.Empleado;

import java.util.List;

public interface IEmpleadoDao {

	public List<Empleado> findAll();
	
	public Empleado saveEmpleado(Empleado empleado);
	
}
