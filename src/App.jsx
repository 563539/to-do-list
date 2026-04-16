import { useState } from "react";
import styled from "styled-components";
import List from "./components/List";
import { GlobalStyle } from "./style/GlobalStyle";
import { TaskProvider, useTasks } from "./contexts/TaskContext";

function App() {
  const [content, setContent] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const { addTask } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content.trim()) return;

    addTask(content, deadLine);
    setContent("");
    setDeadLine("");
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Card>
          <Title>待办清单</Title>
          <Subtitle>猴管委出品</Subtitle>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="text"
                placeholder="新的计划"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Input
                type="text"
                placeholder="DDL（选填）"
                value={deadLine}
                onChange={(e) => setDeadLine(e.target.value)}
              />
            </InputGroup>
            <AddButton type="submit">添加任务</AddButton>
          </Form>
          <ListWrapper>
            <List />
          </ListWrapper>
        </Card>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 28px;
  box-shadow:
    0 20px 35px -8px rgba(0, 0, 0, 0.06),
    0 5px 10px -4px rgba(0, 0, 0, 0.02);
  padding: 2.5rem 2rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 25px 40px -10px rgba(0, 0, 0, 0.08);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #1a1c20;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #8b8f96;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  background: #f4f5f7;
  border: 1.5px solid transparent;
  border-radius: 18px;
  outline: none;
  transition: all 0.2s ease;
  color: #1e1f22;

  &::placeholder {
    color: #9a9fa8;
    font-weight: 300;
  }

  &:focus {
    background: #ffffff;
    border-color: #d0d5dd;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
  }
`;

const AddButton = styled.button`
  background: #1e1f22;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.1s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  letter-spacing: -0.01em;
  align-self: flex-start;

  &:hover {
    background: #2e3035;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

const ListWrapper = styled.div`
  margin-top: 0.5rem;
`;
