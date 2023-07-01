using System;

class TicTacToe
{
    private static char[] board;
    private static char currentPlayer;
    private static bool gameover;

    static void Main()
    {
        Console.Title = "Tic Tac Toe";
        InitializeGame();

        while (!gameover)
        {
            DrawBoard();
            GetPlayerMove();
            CheckWinCondition();
            TogglePlayer();
        }

        DrawBoard();
        GameOver();
    }

    static void InitializeGame()
    {
        board = new char[9] { '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        currentPlayer = 'X';
        gameover = false;
    }

    static void DrawBoard()
    {
        Console.Clear();
        Console.WriteLine("Tic Tac Toe");
        Console.WriteLine("Player 1 (X) - Player 2 (O)\n");

        Console.WriteLine("     |     |      ");
        Console.WriteLine($"  {board[0]}  |  {board[1]}  |  {board[2]}   ");
        Console.WriteLine("_____|_____|_____ ");
        Console.WriteLine("     |     |      ");
        Console.WriteLine($"  {board[3]}  |  {board[4]}  |  {board[5]}   ");
        Console.WriteLine("_____|_____|_____ ");
        Console.WriteLine("     |     |      ");
        Console.WriteLine($"  {board[6]}  |  {board[7]}  |  {board[8]}   ");
        Console.WriteLine("     |     |      ");
    }

    static void GetPlayerMove()
    {
        int move = 0;
        bool validMove = false;

        while (!validMove)
        {
            Console.Write($"\nPlayer {currentPlayer}, enter your move (1-9): ");
            string input = Console.ReadLine();

            if (int.TryParse(input, out move) && move >= 1 && move <= 9 && board[move - 1] != 'X' && board[move - 1] != 'O')
            {
                validMove = true;
            }
            else
            {
                Console.WriteLine("Invalid move. Please try again.");
            }
        }

        board[move - 1] = currentPlayer;
    }

    static void CheckWinCondition()
    {
        // Rows
        for (int i = 0; i <= 6; i += 3)
        {
            if (board[i] == currentPlayer && board[i + 1] == currentPlayer && board[i + 2] == currentPlayer)
            {
                gameover = true;
                return;
            }
        }

        // Columns
        for (int i = 0; i < 3; i++)
        {
            if (board[i] == currentPlayer && board[i + 3] == currentPlayer && board[i + 6] == currentPlayer)
            {
                gameover = true;
                return;
            }
        }

        // Diagonals
        if ((board[0] == currentPlayer && board[4] == currentPlayer && board[8] == currentPlayer) ||
            (board[2] == currentPlayer && board[4] == currentPlayer && board[6] == currentPlayer))
        {
            gameover = true;
            return;
        }

        // Draw
        if (!board.Contains('1') && !board.Contains('2') && !board.Contains('3') &&
            !board.Contains('4') && !board.Contains('5') && !board.Contains('6') &&
            !board.Contains('7') && !board.Contains('8') && !board.Contains('9'))
        {
            gameover = true;
            return;
        }
    }

    static void TogglePlayer()
    {
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }

    static void GameOver()
    {
        Console.WriteLine();

        if (board.Contains('1') || board.Contains('2') || board.Contains('3') ||
            board.Contains('4') || board.Contains('5') || board.Contains('6') ||
            board.Contains('7') || board.Contains('8') || board.Contains('9'))
        {
            Console.WriteLine($"Player {currentPlayer} wins!");
        }
        else
        {
            Console.WriteLine("It's a draw!");
        }
    }
}
