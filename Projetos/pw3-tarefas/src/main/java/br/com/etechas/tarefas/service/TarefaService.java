package br.com.etechas.tarefas.service;

import br.com.etechas.tarefas.dto.TarefaResponseDTO;
import br.com.etechas.tarefas.entity.Tarefa;
import br.com.etechas.tarefas.enums.StatusEnum;
import br.com.etechas.tarefas.mapper.TarefaMapper;
import br.com.etechas.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository repository;

    @Autowired
    private TarefaMapper mapper;

    public List<TarefaResponseDTO> findAll(){
        return mapper.toResponseDTOList(repository.findAll());
    }

    public Object excluirPorId(Long id ){
        if (repository.findById(id) == null){
            return ResponseEntity.notFound();
        }
        Tarefa tarefa = repository.findById(id).get();
        if (tarefa.getStatus()!=StatusEnum.PENDING){
            throw new RuntimeException("Tarefa em progresso ou concluida");
        }

        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
