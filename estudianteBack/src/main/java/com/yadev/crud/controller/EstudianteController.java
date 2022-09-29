package com.yadev.crud.controller;

import com.yadev.crud.exceptions.ResourceNotFoundException;
import com.yadev.crud.model.Estudiante;
import com.yadev.crud.repository.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:4200")
public class EstudianteController {

    @Autowired
    private EstudianteRepository estudianteRepository;

    @GetMapping("/estudiantes")
    public List<Estudiante> listarTodosLosEstudiantes() {
        return estudianteRepository.findAll();
    }

    @PostMapping("/estudiantes")
    public Estudiante guardarEstudiante(@RequestBody Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    @GetMapping("/estudiantes/{id}")
    public ResponseEntity<Estudiante> obtenerEstudiantePorId(@PathVariable Long id) {
        Estudiante estudiante = estudianteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(("No existe el estudiante con ID: " + id)));

        return ResponseEntity.ok(estudiante);
    }

}
