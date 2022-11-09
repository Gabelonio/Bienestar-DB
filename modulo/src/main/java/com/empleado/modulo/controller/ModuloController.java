package com.empleado.modulo.controller;

import com.empleado.modulo.entity.Empleado;
import com.empleado.modulo.repository.EmpleadoRepository;
import com.empleado.modulo.service.email.EmailImpl;
import com.empleado.modulo.service.empleado.EmpleadoServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;

import javax.validation.Valid;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
@SessionAttributes("empleado")
public class ModuloController {
	
	@Autowired
	private EmpleadoServiceImpl empleadoService;
	
	@Autowired
	private EmpleadoRepository repositoryEmpleado;

	@Autowired
	private EmailImpl email;

	@GetMapping({"/", "", "/index", "/home", "/vista"})
	public String index(Model model) {
		model.addAttribute("empleados", empleadoService.findAll());
		return "index";
	}
	
	@GetMapping("/formInsertar")
	public String vistaInsertar(Model model) {
		Empleado empleado = new Empleado();
		model.addAttribute("empleado", empleado);
		return "formInsertar";
	}
	
	@PostMapping("/formInsertar")
	public String insertar(@Valid Empleado empleado, BindingResult resultado, SessionStatus status) {
		empleadoService.saveEmpleado(empleado);
		status.setComplete();
		System.out.println("Empleado insertado con exito");
		email.send(empleado.getCorreo());
		return "redirect:index";
	}
	
	@GetMapping("/modificar/{id}")
	public String vistaModificar(@PathVariable(value = "id") Long id, Model model) {
		Empleado empleado = null;
		if(id > 0 ) {
			empleado = repositoryEmpleado.findById(id).get();
		}else {
			return "redirect:index";
		}
		
		model.addAttribute("empleado", empleado);
		return "modificar";
	}
	
	@PostMapping("/modificar")
	public String modificar(Empleado empleado, SessionStatus status) {
		System.out.println(empleado.toString());
		empleadoService.actualizar(empleado);
		status.setComplete();
		return "redirect:index";
	}
	
	
}
