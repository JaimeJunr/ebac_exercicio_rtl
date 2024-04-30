import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";
import "@testing-library/jest-dom/extend-expect"; // Importing jest-dom matchers

describe("Testes para PostComments", () => {
  beforeEach(() => {
    render(<PostComment />);
  });

  test("Deve renderizar o comentário após submissão do formulário preenchido", () => {
    const commentInput = screen.getByTestId("comment-input");

    fireEvent.change(commentInput, { target: { value: "Teste" } });
    fireEvent.submit(screen.getByTestId("comment-form"));

    expect(screen.getByTestId("comment")).toBeInTheDocument();
    expect(screen.getByTestId("comment")).toHaveTextContent("Teste");
  });

  test("Não deve renderizar o comentário sem valor no input", () => {
    const commentInput = screen.getByTestId("comment-input");

    fireEvent.submit(screen.getByTestId("comment-form")); // Envio sem digitar

    expect(screen.queryByTestId("comment")).not.toBeInTheDocument(); // Usar queryByTestId para elemento possivelmente ausente
  });
});
