// src/components/List.jsx
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { useTasks } from "../contexts/TaskContext";

export default function List() {
  const { tasks: list } = useTasks();

  if (list.length === 0) {
    return (
      <EmptyState>
        <EmptyText>暂无任务</EmptyText>
        <EmptySubtext>点击上方添加新计划</EmptySubtext>
      </EmptyState>
    );
  }

  return (
    <StyledList>
      {list.map((el, index) => (
        <ListItem
          key={el.id}
          id={el.id}
          index={index + 1}
          content={el.content}
          deadLine={el.deadLine}
          completed={el.completed}
        />
      ))}
    </StyledList>
  );
}

// --- Styled Components ---

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3.5rem 1.5rem;
  background: #fafbfc;
  border-radius: 24px;
  border: 1px dashed #e2e5e9;
`;

const EmptyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.6;
`;

const EmptyText = styled.p`
  font-size: 1.1rem;
  font-weight: 450;
  color: #3b3e45;
  margin-bottom: 0.3rem;
`;

const EmptySubtext = styled.p`
  font-size: 0.9rem;
  color: #8b8f96;
`;
