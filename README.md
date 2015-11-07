# bones

Dominos for good.

```haskell
data Domino = Domino Int Int

data Player = PlayerA | PlayerB -- ...

data GameState = GameState
    { players     :: [(Player, PlayerState)]
    , board       :: Board
    , boneyard    :: [Domino]
    , spinner     :: Maybe Domino
    , currentTurn :: Player
    }

data PlayerState = PlayerState
    { hand  :: [Domino]
    , score :: Int
    }

data Board = Board
    { piece  :: Domino
    , childA :: Maybe Board
    , childB :: Maybe Board
    -- only available on spinners, Nothing otherwise
    , childC :: Maybe Board
    , childD :: Maybe Board
    }
```
