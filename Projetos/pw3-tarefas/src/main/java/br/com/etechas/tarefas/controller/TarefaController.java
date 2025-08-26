package br.com.etechas.tarefas.controller;
//Matheus Bernardino  João Pedro
import br.com.etechas.tarefas.dto.TarefaResponseDTO;
import br.com.etechas.tarefas.service.TarefaService;
import com.sun.tools.jconsole.JConsoleContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    private TarefaService service;

    @GetMapping
    public List<TarefaResponseDTO> listar(){
        return service.findAll();
    }


    //Matheus Bernardino  João Pedro
    @DeleteMapping("/{id}")
    public Object deletar(@PathVariable("id") Long id ){
        System.out.println(id);
        return service.excluirPorId(id);
    }
}
