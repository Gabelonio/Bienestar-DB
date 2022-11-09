package com.empleado.modulo.service;

import com.empleado.modulo.entity.Empleado;
import com.empleado.modulo.repository.EmpleadoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoServiceImpl implements IEmpeladoDao{

	@Autowired
	private EmpleadoRepository repositoryEmpleado;
	
	@PersistenceContext
	private EntityManager em;

	public List<Empleado> findAll() {
		return (List<Empleado>) repositoryEmpleado.findAll();
	}

	public Empleado saveEmpleado(Empleado empleado) {
		return repositoryEmpleado.save(empleado);
	}

	public void actualizar(Empleado empleado) {
		if(empleado.getIdEmpleado() != null && empleado.getIdEmpleado() > 0)
		em.merge(empleado);
	}

	public Optional<Empleado> findEmpleadoById(Integer id) {
		return repositoryEmpleado.findById(id);
	}

}
