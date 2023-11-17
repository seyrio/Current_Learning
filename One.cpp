#include <iostream> //preprocessor statement | header files 
// copy paste data of iostream file before compilation for the operators to perform actions
// compiler transforms C++ code into actual machine code
// every cpp file .cpp will be compiled into an object file .obj
// linker takes all of .obj files and glue them to one executable file .exe

void log(const char* message) {
    std::cout << message << std::endl;
}

int main() {
    log("Hello, Evren!");
    std::cin.get();
} 