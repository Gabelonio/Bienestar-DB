package com.empleado.modulo.repository;

import com.empleado.modulo.entity.Empleado;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface EmpleadoRepository extends CrudRepository<Empleado, Integer> {
}
