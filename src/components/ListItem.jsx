import styled from "styled-components";
import { useTasks } from "../contexts/TaskContext";

export function ListItem({ id, index, content, deadLine, completed }) {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <ItemContainer $isCompleted={completed}>
      <ItemIndex>{index}</ItemIndex>
      <ItemContent $isCompleted={completed}>{content}</ItemContent>
      <DeadlineBadge>{deadLine}</DeadlineBadge>

      <ButtonGroup>
        <CompleteButton $isCompleted={completed} onClick={() => toggleTask(id)}>
          {completed ? "↩️ 撤销" : "✓ 完成"}
        </CompleteButton>
        <DeleteButton onClick={() => deleteTask(id)}>删除</DeleteButton>
      </ButtonGroup>
    </ItemContainer>
  );
}

// --- Styled Components ---

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${({ $isCompleted }) => ($isCompleted ? "#f8f9fa" : "#ffffff")};
  border-radius: 20px;
  transition: all 0.2s ease;
  border: 1px solid
    ${({ $isCompleted }) => ($isCompleted ? "#e9ecef" : "#edf0f3")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.01);

  &:hover {
    border-color: #dce1e7;
    box-shadow: 0 6px 12px -6px rgba(0, 0, 0, 0.05);
  }
`;

const ItemIndex = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #9aa1ab;
  min-width: 24px;
  text-align: center;
  background: #f1f3f5;
  padding: 0.2rem 0.5rem;
  border-radius: 30px;
`;

const ItemContent = styled.span`
  flex: 1;
  font-size: 1.05rem;
  font-weight: 460;
  color: ${({ $isCompleted }) => ($isCompleted ? "#8c939e" : "#1e1f22")};
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? "line-through" : "none"};
  text-decoration-thickness: 2px;
  text-decoration-color: #cbd0d6;
  transition: color 0.2s;
  word-break: break-word;
`;

const DeadlineBadge = styled.span`
  font-size: 0.8rem;
  background: #f0f2f5;
  color: #5e6670;
  padding: 0.3rem 0.9rem;
  border-radius: 40px;
  font-weight: 450;
  white-space: nowrap;
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`;

const BaseButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.45rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
`;

const CompleteButton = styled(BaseButton)`
  background: ${({ $isCompleted }) => ($isCompleted ? "#e9ecef" : "#eef1f4")};
  color: ${({ $isCompleted }) => ($isCompleted ? "#4b5563" : "#1f2937")};

  &:hover {
    background: ${({ $isCompleted }) => ($isCompleted ? "#dee4e9" : "#e1e6eb")};
  }
`;

const DeleteButton = styled(BaseButton)`
  color: #9a9fa8;
  background: transparent;

  &:hover {
    color: #d9534f;
    background: #fef0ef;
  }
`;
