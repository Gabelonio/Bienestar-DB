package com.empleado.modulo.service.empleado;

import com.empleado.modulo.entity.Empleado;
import com.empleado.modulo.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
@Transactional
public class EmpleadoServiceImpl implements IEmpleadoDao {

	@Autowired
	private EmpleadoRepository repositoryEmpleado;
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Empleado> findAll() {
		return (List<Empleado>) repositoryEmpleado.findAll();
	}

	@Override
	public Empleado saveEmpleado(Empleado empleado) {
		return repositoryEmpleado.save(empleado);
	}

	public void actualizar(Empleado empleado) {
		if(empleado.getIdEmpleado() != null && empleado.getIdEmpleado() > 0)
		em.merge(empleado);
	}
}
