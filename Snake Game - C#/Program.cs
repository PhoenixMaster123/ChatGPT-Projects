using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

class SnakeGame
{
    private static int screenWidth = 40;
    private static int screenHeight = 20;
    private static int score = 0;
    private static int sleepTime = 200;
    private static bool gameover = false;

    private static int headX;
    private static int headY;
    private static int foodX;
    private static int foodY;

    private static List<int> snakeX;
    private static List<int> snakeY;
    private static Direction direction;

    private enum Direction
    {
        Up,
        Down,
        Left,
        Right
    }

    static void Main()
    {
        Console.Title = "Snake Game";
        Console.CursorVisible = false;
        Console.SetWindowSize(screenWidth, screenHeight);
        Console.SetBufferSize(screenWidth, screenHeight);

        InitializeGame();

        while (!gameover)
        {
            if (Console.KeyAvailable)
            {
                var key = Console.ReadKey(true).Key;
                ChangeDirection(key);
            }

            MoveSnake();
            CheckCollision();
            DrawScreen();

            Thread.Sleep(sleepTime);
        }

        GameOver();
    }

    static void InitializeGame()
    {
        headX = screenWidth / 2;
        headY = screenHeight / 2;
        snakeX = new List<int> { headX };
        snakeY = new List<int> { headY };
        direction = Direction.Right;
        GenerateFood();
    }

    static void GenerateFood()
    {
        Random random = new Random();
        foodX = random.Next(1, screenWidth - 1);
        foodY = random.Next(1, screenHeight - 1);
    }

    static void ChangeDirection(ConsoleKey key)
    {
        switch (key)
        {
            case ConsoleKey.W:
            case ConsoleKey.UpArrow:
                if (direction != Direction.Down)
                    direction = Direction.Up;
                break;
            case ConsoleKey.S:
            case ConsoleKey.DownArrow:
                if (direction != Direction.Up)
                    direction = Direction.Down;
                break;
            case ConsoleKey.A:
            case ConsoleKey.LeftArrow:
                if (direction != Direction.Right)
                    direction = Direction.Left;
                break;
            case ConsoleKey.D:
            case ConsoleKey.RightArrow:
                if (direction != Direction.Left)
                    direction = Direction.Right;
                break;
            case ConsoleKey.Escape:
                gameover = true;
                break;
        }
    }

    static void MoveSnake()
    {
        int nextX = snakeX[0];
        int nextY = snakeY[0];

        switch (direction)
        {
            case Direction.Up:
                nextY--;
                break;
            case Direction.Down:
                nextY++;
                break;
            case Direction.Left:
                nextX--;
                break;
            case Direction.Right:
                nextX++;
                break;
        }

        snakeX.Insert(0, nextX);
        snakeY.Insert(0, nextY);

        if (nextX == foodX && nextY == foodY)
        {
            score++;
            GenerateFood();
        }
        else
        {
            snakeX.RemoveAt(snakeX.Count - 1);
            snakeY.RemoveAt(snakeY.Count - 1);
        }
    }

    static void CheckCollision()
    {
        if (snakeX[0] == 0 || snakeX[0] == screenWidth - 1 || snakeY[0] == 0 || snakeY[0] == screenHeight - 1)
        {
            gameover = true;
        }

        if (snakeX.Skip(1).Contains(snakeX[0]) && snakeY.Skip(1).Contains(snakeY[0]))
        {
            gameover = true;
        }
    }

    static void DrawScreen()
    {
        Console.Clear();

        // Draw snake
        for (int i = 0; i < snakeX.Count; i++)
        {
            Console.SetCursorPosition(snakeX[i], snakeY[i]);
            Console.Write(i == 0 ? "@" : "#");
        }

        // Draw food
        Console.SetCursorPosition(foodX, foodY);
        Console.Write("*");

        // Draw score
        Console.SetCursorPosition(0, screenHeight - 1);
        Console.Write($"Score: {score}");
    }

    static void GameOver()
    {
        Console.Clear();
        Console.SetCursorPosition(screenWidth / 2 - 5, screenHeight / 2);
        Console.Write("Game Over!");
        Console.SetCursorPosition(screenWidth / 2 - 7, screenHeight / 2 + 1);
        Console.Write($"Final Score: {score}");
        Console.SetCursorPosition(0, screenHeight - 1);
    }
}
