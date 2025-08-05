package br.com.etechas.tarefas.repository;

import br.com.etechas.tarefas.entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
