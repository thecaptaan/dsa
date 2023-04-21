#include "iostream"

int Partition(int[], int, int);
void QuickSort(int[], int, int);
int main()
{
    int array[]{10, 80, 90, 78, 6, 654, 643, 876, 98, 135,739};
    int arrayLength = sizeof(array) / sizeof(int);
    QuickSort(array, 0, arrayLength - 1);
    for (int i = 0; i < arrayLength; i++)
    {
        std::cout << array[i] << std::endl;
    }
    
    return 0;
}

int Partition(int array[], int lowest, int highest)
{
    int pivot = array[highest];
    int i = lowest - 1;
    for (int j = lowest; j <= highest; j++)
    {
        if (array[j] < pivot)
        {
            i++;
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    int temp = array[i + 1];
    array[i + 1] = array[highest];
    array[highest] = temp;
    return (i + 1);
}

void QuickSort(int array[], int lowest, int highest)
{
    if (lowest < highest)
    {
        int pIndex = Partition(array, lowest, highest);
        QuickSort(array, lowest, pIndex - 1);
        QuickSort(array, pIndex + 1, highest);
    }
}