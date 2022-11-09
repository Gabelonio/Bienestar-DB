package com.empleado.modulo.controller;

import java.util.List;
import java.util.Optional;

import com.empleado.modulo.entity.Empleado;
import com.empleado.modulo.repository.EmpleadoRepository;
import com.empleado.modulo.service.EmpleadoServiceImpl;
import com.empleado.modulo.service.email.EmailImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;


@RequestMapping("/API")
@RestController
@CrossOrigin(origins = "*")
public class ModuloController {
	
	@Autowired
	private EmpleadoServiceImpl empleadoService;
	
	@Autowired
	private EmpleadoRepository repositoryEmpleado;
	
	@Autowired
	private EmailImpl email;
	
	@GetMapping({"/", "", "/index", "/home", "/vista"})
	private List<Empleado> getAllEmpleados(){
		return empleadoService.findAll();
	}
	
	@GetMapping({"/Empleado/{idEmpleado}"})
	private Optional<Empleado> getEmpleado(@PathVariable("idEmpleado") Integer idEmpleado){
		return empleadoService.findEmpleadoById(idEmpleado);
	}
	
	/*public String index(Model model) {
		model.addAttribute("empleados", empleadoService.findAll());
		return "index";
	}*/
	
	
	/*
	 * @GetMapping("/formInsertar")
	 * public String vistaInsertar(Model model) {
		Empleado empleado = new Empleado();
		model.addAttribute("empleado", empleado);
		return "formInsertar";
	}*/
	
	@PostMapping("/formInsertar")
	private Empleado insertar(@RequestBody Empleado empleado) {
		email.send(empleado.getCorreo());
		return empleadoService.saveEmpleado(empleado);
	}
	/*private String insertar(@Valid Empleado empleado, BindingResult resultado, SessionStatus status) {
		empleadoService.saveEmpleado(empleado);
		status.setComplete();
		System.out.println("Empleado insertado con exito");
		return "redirect:index";
	}
	@PostMapping("/signup")
	private Usuario signUp(@RequestBody Usuario user) {
		if(usuarioService.findUserById(user.getDocumento()).isEmpty()) {
			return usuarioService.saveUser(user);
		}
		return null;
	}*/
	
	/*@GetMapping("/modificar/{id}")
	public String vistaModificar(@PathVariable(value = "id") Long id, Model model) {
		Empleado empleado = null;
		if(id > 0 ) {
			empleado = repositoryEmpleado.findById(id).get();
		}else {
			return "redirect:index";
		}
		
		model.addAttribute("empleado", empleado);
		return "modificar";
	}*/
	
	/*@PostMapping("/modificar")
	public String modificar(Empleado empleado, SessionStatus status) {
		System.out.println(empleado.toString());
		empleadoService.actualizar(empleado);
		status.setComplete();
		return "redirect:index";
	}*/
	
	@PutMapping("/modificar/{idEmpleado}")
	public Empleado modificar(@PathVariable("idEmpleado") Integer idEmpleado,
							  @RequestBody Empleado empleado) {
		Empleado current = empleadoService.findEmpleadoById(idEmpleado).get();
		current.setCedula(empleado.getCedula());
		current.setCorreo(empleado.getCorreo());
		current.setFechaNacimiento(empleado.getFechaNacimiento());
		current.setPrimerApellido(empleado.getPrimerApellido());
		current.setPrimerNombre(empleado.getPrimerNombre());
		current.setSegundoApellido(empleado.getSegundoApellido());
		current.setSegundoNombre(empleado.getSegundoNombre());
		current.setSexoBiologico(empleado.getSexoBiologico());
		current.setTelefono(empleado.getTelefono());
		//empleadoService.actualizar(empleado);
		return empleadoService.saveEmpleado(current);
	}
	
	/*@GetMapping("/login/{id}/{pass}")
	private Usuario validateLogin(@PathVariable Long id, 
								  @PathVariable String pass){
		if(usuarioService.findUserById(id).isEmpty()) {
			return null;
		}
		Usuario opt = usuarioService.findUserById(id).get();
		return (opt.getClave().equals(pass))? opt: null;
	}*/

	
	
}
