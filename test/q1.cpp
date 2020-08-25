#include <iostream>
using namespace std;

class tTemp
{
private:
    double temp;
    double tempF(double);

public:
    tTemp();
    ~tTemp();
    setTemp(double);
    double getTemp();
    double getTempF();
};

class Base1
{
public:
    Base1()
    {
        cout << "Base1 called" << endl;
    }
};

class Derived : public Base, public Base1
{
public:
    Derived()
    {
        cout << "Derived called" << endl;
    }
};

int main()
{
    Derived d;
    return 0;
}