from invoke import task
from pathlib import Path
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

CUR_DIR = Path(".")


def run(c, cmd):
    """
    a wrapper to simplify debuging
    """
    SIZE = 50
    print("=" * SIZE)
    print(f"-> {cmd} <-")
    print("=" * SIZE)
    return c.run(cmd)
    print("=" * SIZE)
    print(f"<- {cmd} ->")
    print("=" * SIZE)


@task
def vagrant_up(c):
    run(c, "vagrant up")
