import java.util.Scanner;

public class RealEstateInvestorChecklist {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean[] checklist = new boolean[11]; // 11 items in the checklist
        boolean allCompleted = false;

        System.out.println("Real Estate Investor Checklist");

        while (!allCompleted) {
            System.out.println("\nSelect an action:");
            System.out.println("1. Mark checklist item as completed");
            System.out.println("2. View checklist");
            System.out.println("3. Complete checklist");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    markItemAsCompleted(checklist, scanner);
                    break;
                case 2:
                    displayChecklist(checklist);
                    break;
                case 3:
                    allCompleted = completeChecklist(checklist);
                    break;
                default:
                    System.out.println("Invalid choice. Please enter a number between 1 and 3.");
            }
        }

        System.out.println("Congratulations! You have completed your real estate investor checklist.");
        scanner.close();
    }

    public static void markItemAsCompleted(boolean[] checklist, Scanner scanner) {
        System.out.println("Enter the checklist item number you want to mark as completed:");
        int itemNumber = scanner.nextInt();
        scanner.nextLine(); // Consume newline character

        if (itemNumber < 1 || itemNumber > checklist.length) {
            System.out.println("Invalid item number.");
        } else {
            checklist[itemNumber - 1] = true; // Arrays are zero-indexed
            System.out.println("Checklist item " + itemNumber + " marked as completed.");
        }
    }

    public static void displayChecklist(boolean[] checklist) {
        System.out.println("Investment Property Evaluation Checklist:");
        System.out.println("1. Purpose of the Book - Setting the stage for your investment journey.");
        System.out.println("2. Defining Your Investment Criteria - Identifying what to look for in properties.");
        System.out.println("3. Buying Process - Detailed steps from searching to purchasing.");
        System.out.println("4. Building Your Deals Funnel - Techniques for managing multiple investment opportunities.");
        System.out.println("5. Deal Analysis - Essential metrics for assessing property deals.");
        System.out.println("6. Advanced Deal Analysis - Deeper insights into financial analysis and market trends.");
        System.out.println("7. Negotiating Deals - Effective strategies to secure the best terms.");
        System.out.println("8. Legal Considerations - Understanding contracts and property law.");
        System.out.println("9. Project Management - Managing renovations and property improvements.");
        System.out.println("10. Systems - Implementing tools to streamline your investments.");
        System.out.println("11. Scaling - Growing your investment portfolio effectively.");

        System.out.println("\nCompleted Checklist Items:");
        for (int i = 0; i < checklist.length; i++) {
            if (checklist[i]) {
                System.out.println((i + 1) + ". Completed");
            }
        }
    }

    public static boolean completeChecklist(boolean[] checklist) {
        for (boolean item : checklist) {
            if (!item) {
                System.out.println("Please complete all checklist items before completing the checklist.");
                return false;
            }
        }
        return true;
    }
}
