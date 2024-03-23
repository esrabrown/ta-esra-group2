package LaunchCode.project.service;

import LaunchCode.project.models.Transaction;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TransactionService {
    void updateTransaction(int id, String name, String description, double amount, String currency);
    Optional<Transaction> transactionById(int id);
    void deleteTransaction(Transaction response);
    void saveTransaction(Transaction transaction);
    List<Transaction> getAllTransactions();

    List<Transaction> searchTransactionsByName(String name);

    List<Transaction> searchTransactionsByAmount(double amount);
}
