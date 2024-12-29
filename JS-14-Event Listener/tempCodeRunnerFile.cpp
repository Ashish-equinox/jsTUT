#include <iostream>
#include <cstring>

class String {
   private:
    char* m_data;
    unsigned long long m_length;
    unsigned long long m_capacity;

   public:
    String(const char* str = nullptr) {
        if (str == nullptr) {
            m_length = 0;
            m_capacity = 0;
            m_data = new char[1];
            *m_data = '\0';
        } else {
            m_length = strlen(str);
            m_capacity = m_length;
            m_data = new char[m_capacity + 1];
            strcpy(m_data, str);
        }
    }

    String(const String& other) {
        m_length = other.m_length;
        m_capacity = other.m_capacity;
        m_data = new char[m_capacity + 1];
        strcpy(m_data, other.m_data);
    }

    ~String() {
        delete[] m_data;
    }

    char* get_c_str() const {
        return m_data;
    }

    String& operator=(const String& other) {
        if (this != &other) {
            delete[] m_data;
            m_length = other.m_length;
            m_capacity = other.m_capacity;
            m_data = new char[m_capacity + 1];
            strcpy(m_data, other.m_data);
        }
        return *this;
    }

    bool operator==(const String& other) {
        return strcmp(m_data, other.m_data) == 0;
    }

    bool operator!=(const String& other) {
        return strcmp(m_data, other.m_data) != 0;
    }

    bool operator<(const String& other) {
        return strcmp(m_data, other.m_data) < 0;
    }

    bool operator>(const String& other) {
        return strcmp(m_data, other.m_data) > 0;
    }

    bool operator<=(const String& other) {
        return strcmp(m_data, other.m_data) <= 0;
    }

    bool operator>=(const String& other) {
        return strcmp(m_data, other.m_data) >= 0;
    }

    String operator+(const String& other) {
        unsigned long long new_length = m_length + other.m_length;
        char* str = new char[new_length + 1];
        strcpy(str, m_data);
        strcat(str, other.m_data);
        String temp(str);
        delete[] str;
        return temp;
    }

    bool isSubString(const String& other) {
        return strstr(m_data, other.m_data) != nullptr;
    }

    String toLowerCase() {
        char* str = new char[m_capacity + 1];
        strcpy(str, m_data);
        for (unsigned long long i = 0; i < m_length; i++) {
            if (str[i] >= 'A' && str[i] <= 'Z') {
                str[i] += 32;
            }
        }
        String temp(str);
        delete[] str;
        return temp;
    }

    String toUpperCase() {
        char* str = new char[m_capacity + 1];
        strcpy(str, m_data);
        for (unsigned long long i = 0; i < m_length; i++) {
            if (str[i] >= 'a' && str[i] <= 'z') {
                str[i] -= 32;
            }
        }
        String temp(str);
        delete[] str;
        return temp;
    }

    char getCertainChar(unsigned long long index) {
        if (index < m_length) {
            return m_data[index];
        }
        return '\0';
    }
};

class StringDerived : public String {
   public:
    StringDerived(const char* str = nullptr) : String(str) {}

    StringDerived(const StringDerived& other) : String(other) {}

    StringDerived& operator=(const StringDerived& other) {
        if (this != &other) {
            String::operator=(other);
        }
        return *this;
    }

    StringDerived operator+(const StringDerived& other) {
        String baseResult = String::operator+(other);
        return StringDerived(baseResult.get_c_str()); 
    }

    bool isSubString(const StringDerived& other) {
        return String::isSubString(other);
    }

    StringDerived toLowerCase() {
        String baseResult = String::toLowerCase(); 
        return StringDerived(baseResult.get_c_str()); 
    }

    StringDerived toUpperCase() {
        String baseResult = String::toUpperCase(); 
        return StringDerived(baseResult.get_c_str()); 
    }
};


int main() {
    String str1("Hello");
    String str2("World");
    String str3 = str1 + str2;
    std::cout << str3.get_c_str() << std::endl;
    std::cout << str3.isSubString("Hello") << std::endl;
    std::cout << str3.isSubString("World") << std::endl;
    std::cout << str3.isSubString("Hello World") << std::endl;
    std::cout << str3.toLowerCase().get_c_str() << std::endl;
    std::cout << str3.toUpperCase().get_c_str() << std::endl;
    std::cout << str3.getCertainChar(0) << std::endl;

    StringDerived str4("Hello");
    StringDerived str5("World");
    StringDerived str6 = str4 + str5;
    std::cout << str6.get_c_str() << std::endl;
    std::cout << str6.isSubString("Hello") << std::endl;
    std::cout << str6.isSubString("World") << std::endl;
    std::cout << str6.isSubString("Hello World") << std::endl;
    std::cout << str6.toLowerCase().get_c_str() << std::endl;
    std::cout << str6.toUpperCase().get_c_str() << std::endl;
    std::cout << str6.getCertainChar(0) << std::endl;

    return 0;
}