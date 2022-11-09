package com.empleado.modulo.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "EMPLEADO")
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ")
    @SequenceGenerator(name = "SEQ", sequenceName = "EMPLEADO_SEQ", allocationSize = 1)
    @NotNull
    @Column(name = "IDEMPLEADO")
    private Integer idEmpleado;

    @NotNull
    @Column(name = "PRIMERNOMBRE")
    private String primerNombre;

    @NotNull
    @Column(name = "SEGUNDONOMBRE")
    private String segundoNombre;

    @NotNull
    @Column(name = "PRIMERAPELLIDO")
    private String primerApellido;

    @NotNull
    @Column(name = "SEGUNDOAPELLIDO")
    private String segundoApellido;

    @NotNull
    @Column(name = "CEDULA")
    private String cedula;

    
    @NotNull
    @Column(name = "FECHANACIMIENTO")
    private String fechaNacimiento;

    @NotNull
    @Column(name = "CORREO")
    private String correo;

    @NotNull
    @Column(name = "TELEFONO")
    private String telefono;

    @NotNull
    @Column(name = "SEXOBIOLOGICO")
    private String sexoBiologico;
}
