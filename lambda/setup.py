from setuptools import setup, find_packages

setup(
    name='contact_form',
    version='1.0',
    packages=find_packages(),
    install_requires=[
        'boto3',
        'moto'
    ],
)
