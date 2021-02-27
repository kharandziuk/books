from invoke import task
from pathlib import Path
from dotenv import load_dotenv

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


@task
def frontend(c):
    build_folder = CUR_DIR / 'frontend' / 'build'
    with c.cd('frontend'):
        run(
            c,
            'yarn'
        )
        run(
            c,
            'yarn build'
        )
    run(c, 'ls')
    run(c, 'ls frontend')
    run(
        c,
        "aws s3 cp --recursive "
        f"{build_folder.absolute()} s3://django-books-app-bucket"
    )
